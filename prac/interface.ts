// 타입이 특정 값 갖게 하도록 하는 방법 
type Team = "red" | "blue" | "yellow"
type Health = 1 | 5 | 10

//인터페이스는 한가지용도, 오브젝트의 모양을 특정해주기 위함 - react에 많이 사용함
//인터페이스는 property들을 축적시킬 수 있음
interface Playerr {
    nickname: string,
    team : Team,
    health: Health
}
//interface Palyerr과 같은것임
//하지만 인터페이스는 객체만 !
type Player = {
    nickname: string,
    team : Team,
    health: Health
}

const nicoo : Playerr= {
    nickname:"nico",
    team: "yellow",
    health: 10,
}


//interface 사용시
interface User {
    name: string
}
//인터페이스 상속도 가능함
interface Player1 extends User {
}
//type사용시--
type User = {
    name: string
}
type Player1 = User & {
}

//인터페이스는 property들을 축적시킬 수 있음
//인터페이스 아래와 같이 만들면 알아서 하나로 합쳐줌
interface User1 {
    name: string,
}

interface User1 {
    lastName: string
}

interface User1 {
    health: number
}
//단순히 타입스크립트에게 오브젝트의 모양을 알려주고 싶으면 타입이나 인터페이스 중 아무거나 써도됨.
// 인터페이스는 객체지향 프로그래밍 개념을 활용해서 디자인 되었고, 타입은 더 개방적임
