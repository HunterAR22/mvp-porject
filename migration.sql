DROP TABLE IF EXISTS journal_id;

CREATE TABLE journal_id (
    id serial PRIMARY KEY,
    entry_date text,
    journal_entry text,
    user_ text,
    name text
);