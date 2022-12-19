//type
type PlayerA = {
    name : string
}
type PlayerAA = PlayerA & {
    lastName : string,
}
//property 추가 하고 싶을 때 타입이 정의 돼 있어서 중복으로 만들 수 없음
const playerA : PlayerAA = {
    name:"nico",
    lastName: "x",
}

//interface
interface PlayerB {
    name: string
}
interface PlayerBB extends PlayerB {
    lastName: string
}
//interface는 추가로 property추가 가능
interface PlayerBB {
    health : number
}
const playerB : PlayerBB = {
    name:"nico",
    lastName:"xx",
    health: 1
}