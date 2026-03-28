import { TasksList } from "./tasks/ui/tasks-list";
import { saveToStorage, getFromStorage } from "./lib/storage";
import { useTasks } from "./tasks/model/use-tasks";
import { TaskItem } from "./tasks/ui/task-item";
import { CreateTaskForm } from "./tasks/ui/create-task-from";
import { UserSelect } from "./user/ui/user-select";

export function App() {
  const { addTask, removeTask, tasks, toggleCheckTask, updateOwner } = useTasks(
    { saveToStorage, getFromStorage },
  );

  return (
    <>
      <TasksList
        tasks={tasks}
        renderTask={(task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            done={task.done}
            ownerId={task.ownerId}
            onDelete={() => removeTask(task.id)}
            onToggleDone={() => toggleCheckTask(task.id)}
            onChangeOwner={(ownerId: string) => updateOwner(task.id, ownerId)}
            userSelectSlot={
              <UserSelect
                userId={task.ownerId}
                onChangeUserId={(ownerId: string) =>
                  updateOwner(task.id, ownerId)
                }
              />
            }
          />
        )}
        createTaskSlot={<CreateTaskForm onCreate={addTask} />}
      />
    </>
  );
}
