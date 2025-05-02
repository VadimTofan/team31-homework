INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('MyTask', 'This is an amazing Task', '2025-05-10', '2025-05-10', '2025-05-10', 2, 13);

UPDATE task 
SET title = 'It was a simple task'
WHERE id = 42;

UPDATE task
SET due_date = '2025-05-31'
WHERE id = 42;

UPDATE task
SET status_id = 1
WHERE id = 42;

DELETE FROM task
WHERE id = 42;
