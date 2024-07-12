
type Homework = {
 age: number
 username: string
 toggle: boolean
 empty: null 
 callback: (a: number) => number

}
const tasks: Homework = {
age: 50,
username:'Max',
toggle: true,
empty: null,
callback: (a) => { return 100 + a },
}

export {tasks}