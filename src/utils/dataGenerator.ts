export interface User {
    id: number;
    name: string;
    surname: string;
    age: number;
    email: string;
}

export const generateMockData = (): User[] => {
    const names = ['Иван', 'Петр', 'Алексей', 'Мария', 'Елена', 'Федор', 'Филипп'];
    const surnames = ['Иванов', 'Петров', 'Сидоров', 'Смирнова', 'Кузнецова'];
    const domains = ['mail.ru', 'gmail.com', 'yandex.ru'];

    const users = Array.from({ length: 1000000 }, (_, id) => ({
        id: id + 1,
        name: names[Math.floor(Math.random() * names.length)],
        surname: surnames[Math.floor(Math.random() * surnames.length)],
        age: Math.floor(Math.random() * (80 - 18 + 1)) + 18,
        email: `${names[Math.floor(Math.random() * names.length)].toLowerCase()}${
            id + 1
        }@${domains[Math.floor(Math.random() * domains.length)]}`,
    }));
    return users;
};