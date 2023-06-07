INSERT INTO department (department_id, department_name)
VALUES  (1, "HR"),
        (2, "Corporate"),
        (3, "Engineering"),
        (4, "R+D"),
        (5, "Fabrication");

INSERT INTO roles (title, role_id, department_id, salary)
VALUES  ("chemist", "manager", 4, "80000"),
        ("CFO", "Chief", 2, "800000"),
        ("HR", "Manager", 1, "50000"),
        ("Engineer", "manager", 3, "80000"),
        ("Brake Press Operator", "Labor", 5, "45000");

INSERT INTO employee (employee_id, first_name, last_name, title, department_name, salary, manager)
VALUES  (1, "Steve", "Rogers", "Chemist", "R+D", "80000", "Thor"),
        (2, "Tony", "Stark", "Corporate", "800000", "Incredible Hulk"),
        (3, "Black", "Widow", "HR", "50000", "Captain Marvel"),
        (4, "Scarlet", "Witch", "Engineering", "80000", "Doctor Strange"),
        (5, "Incredible", "Hulk", "Fabrication", "35000","Thanos");
