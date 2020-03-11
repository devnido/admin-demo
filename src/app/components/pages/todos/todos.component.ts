import { Component, OnInit, OnDestroy } from '@angular/core';
import Swal from 'sweetalert2';
import { Todo } from 'src/app/models/todo.model';
import { TodoApiService } from 'src/app/services/api/todo-api.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styles: []
})
export class TodosComponent implements OnInit, OnDestroy {

    todos: Todo[] = [];
    totalTodos: number = 0;
    page: number = 1;
    nextPage: number = 1;
    loading: boolean = true;
    loadingById: string = '';
    subscriptions: Subscription[] = [];

    constructor(private todoApiService: TodoApiService) { }

    ngOnInit(): void {
        this.loadTodos();
    }
    ngOnDestroy(): void {
        this.subscriptions.map(s => s.unsubscribe());
    }

    searchTodos(q: string) {
        if (q.length === 0) {
            this.loadTodos();
            return;
        }

        this.loading = true;

        const subscription = this.todoApiService.searchTodos(q)
            .subscribe((resp: any) => {
                this.todos = resp.todos;
                this.totalTodos = resp.total;
                this.loading = false;
            }, error => {
                this.loading = false;
                if (error.status === 422) {
                    Swal.fire('Ha ocurrido un error', error.error.content.error.errors[0].msg, 'error');
                } else {
                    Swal.fire('Ha ocurrido un error', 'Vuelva a intentarlo mas tarde', 'error');
                }

            });
        this.subscriptions.push(subscription);
    }

    loadTodos() {

        this.loading = true;

        const subscription = this.todoApiService.getTodos(this.page)
            .subscribe((resp: any) => {

                this.todos = resp.todos;
                this.totalTodos = resp.total;
                this.nextPage = resp.nextPage;
                this.loading = false;

            }, error => {
                this.loading = false;
                if (error.status === 422) {
                    Swal.fire('Ha ocurrido un error', error.error.content.error.errors[0].msg, 'error');
                } else {
                    Swal.fire('Ha ocurrido un error', 'Vuelva a intentarlo mas tarde', 'error');
                }

            });
        this.subscriptions.push(subscription);
    }

    deleteTodo(todo: Todo) {

        Swal.fire({
            title: '¿Está seguro?',
            text: 'Está a punto de borrar la tarea ' + todo.name,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'No',
        }).then((result) => {

            if (result.value) {

                const subscription = this.todoApiService.deleteTodo(todo._id)
                    .subscribe((resp: any) => {

                        this.page = 1;
                        this.loadTodos();

                        Swal.fire(
                            'Eliminado!',
                            'La tarea se ha eliminado exitosamente.',
                            'success'
                        );

                    }, error => {

                        if (error.status === 422) {
                            Swal.fire('Ha ocurrido un error', error.error.content.error.errors[0].msg, 'error');
                        } else {
                            Swal.fire('Ha ocurrido un error', 'Vuelva a intentarlo mas tarde', 'error');
                        }

                    });
                this.subscriptions.push(subscription);
            }
        });

    }

    changeSwitch(todo: Todo) {

        if (todo.status === 'pendiente') {
            todo.status = 'realizado';
        } else {
            todo.status = 'pendiente';
        }

        this.loadingById = todo._id;
        const subscription = this.todoApiService.updateTodo(todo)
            .subscribe((resp: any) => {

                const indexCurrentTodo = this.todos.findIndex(t => t._id === resp.todo._id);

                this.todos[indexCurrentTodo] = resp.todo;

                // Swal.fire('Tarea actualizada', todo.name, 'success');

                this.loadingById = '';

            }, error => {

                this.loadingById = '';
                if (error.status === 422) {
                    Swal.fire('Ha ocurrido un error', error.error.content.error.errors[0].msg, 'error');
                } else {
                    Swal.fire('Ha ocurrido un error', 'Vuelva a intentarlo mas tarde', 'error');
                }

            });
        this.subscriptions.push(subscription);

    }

    getPrevPage() {
        if (this.page > 1) {
            this.page--;
            this.loadTodos();
        }
        return;
    }


    getNextPage() {
        if (this.nextPage > this.page) {
            this.page++;
            this.loadTodos();
        }
        return;
    }

}
