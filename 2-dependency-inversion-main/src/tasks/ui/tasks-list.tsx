import { Task } from "../model/use-tasks";

export function TasksList({
  tasks,
  renderTask,
  createTaskSlot,
}: {
  tasks: Task[];
  renderTask: (task: Task) => React.ReactNode;
  createTaskSlot: React.ReactNode;
}) {
  return (
    <div>
      {createTaskSlot}
      {tasks.map((task) => (
        <div key={task.id}>{renderTask(task)}</div>
      ))}
    </div>
  );
}
