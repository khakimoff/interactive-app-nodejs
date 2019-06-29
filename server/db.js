const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({
	users: [
		{
			login: 'kuznecova',
			level: 'teacher',
			name: 'Кузнецова Марина Ивановна',
			pass: '12345'
		},
		{
			login: 'petrov',
			level: 'student',
			name: 'Петров Алексей',
			pass: '12345'
		},
		{
			login: 'sidorov',
			level: 'student',
			name: 'Сидоров Иван',
			pass: '12345'
		},
		{
			login: 'ivanov',
			level: 'student',
			name: 'Иванов Сергей',
			pass: '12345'
		},
		{
			login: 'lopytin',
			level: 'student',
			name: 'Копытин Адрей',
			pass: '12345'
		},
		{
			login: 'friskin',
			level: 'student',
			name: 'Фрышкин Иван',
			pass: '12345'
		},
		{
			login: 'papshenkova',
			level: 'student',
			name: 'Папченкова Екатерина',
			pass: '12345'
		},
		{
			login: 'harchenko',
			level: 'student',
			name: 'Харченко Анастасия',
			pass: '12345'
		},
		{
			login: 'gubaidulin',
			level: 'student',
			name: 'Губайдулин Ильяс',
			pass: '12345'
		},
		{
			login: 'hairulina',
			level: 'student',
			name: 'Хайрулина Лилия',
			pass: '12345'
		},
		{
			login: 'kuruguzova',
			level: 'student',
			name: 'Куругузова Надежда',
			pass: '12345'
		},
	],
}).write()

module.exports = db
