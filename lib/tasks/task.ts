import { z } from "zod";

const text = z.string().trim().min(1);

export const TASK_STATUSES = ["review", "ready"] as const;
export const taskStatusSchema = z.enum(TASK_STATUSES);

export const taskSchema = z.strictObject({
  id: text,
  title: text,
  area: text,
  summary: text,
  detail: text,
  checks: z.array(text).min(1),
  status: taskStatusSchema,
});

/** What the "New task" form collects; everything else is derived when the task is created. */
export const newTaskSchema = z.strictObject({
  title: text,
  area: text,
  description: text,
});

export type TaskStatus = z.infer<typeof taskStatusSchema>;
export type Task = z.infer<typeof taskSchema>;
export type NewTask = z.infer<typeof newTaskSchema>;
export type TaskFilter = "all" | TaskStatus;
