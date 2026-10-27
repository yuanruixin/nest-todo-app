import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto.js';
import { Todo } from './entities/todo.entity.js';
import { UpdateTodoDto } from './dto/update-todo.dto.js';

let todos = [
  {
    id: 1,
    title: 'Todo 1',
  },
  {
    id: 2,
    title: 'Todo 2',
  },
  {
    id: 3,
    title: 'Todo 3',
  },
];

@Injectable()
export class TodoService {
  todos: Todo[] = [
    {
      id: 1,
      title: 'Todo 1',
      content: 'Content 1',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Todo 2',
      content: 'Content 2',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Todo 3',
      content: 'Content 3',
      isCompleted: false,
    },
  ];
  findAllTodos() {
    return todos;
  }

  findOneTodo(id: number) {
    return todos.find((todo) => Number(todo.id) === Number(id));
  }

  createTodo(newTodo: CreateTodoDto) {
    todos.push({
      id: Date.now(),
      ...newTodo
    });
    return newTodo;
  }

  updateTodo(id: number, updateTodo: UpdateTodoDto) {
    todos = todos.map((todo) => {
      if (Number(todo.id) === Number(id)) {
        return {
          ...todo,
          ...updateTodo,
        };
      }
      return todo;
    });

    return updateTodo;
  }

  deleteTodo(id: number) {
    todos = todos.filter((todo) => Number(todo.id) !== Number(id));

    return true;
  }
}
