const users = [
	{
	  username: 'David',
	  status: 'online',
	  lastActivity: 10
	},
	{
	  username: 'Lucy',
	  status: 'offline',
	  lastActivity: 22
	},
	{
          username: 'Bob',
          status: 'online',
          lastActivity: 104
        }
]
console.log(users)

const onlineUsers1 = users.splice(1,0)  //таким методом не получилось
console.log('onlineUsers', onlineUsers1);

// let numbers = [1,2,3,4]
// console.log(numbers);
// numbers.splice(2,1);
// console.log(numbers); // [1,2,4]

const onlineUsers = users.filter((_, index)=>{
  return index != 1
})
console.log('onlineUsers', onlineUsers)// почему-то так и не работает поиск по индексу

let usersOnline = users.filter(user => user.status === 'online') // получили массив онлайн юзеров длиной 2
console.log('массив онлайн', usersOnline);

let userNames = usersOnline.map(user => user.username)
console.log('Поиск по имени', userNames);

let userNamesString = userNames.join('; ')
alert (`Сейчас в онлайн следующие пользователи: ${userNamesString}`)
