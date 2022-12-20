 // 다형성은 다른 모양의 코드를 가질 수 있게 해주는 것-제네릭 사용하면 다형성
// 제네릭은 placehoder 타입을 쓸 수 있게해줌

// 제네릭을 클래스로 보내고, 클래스는 제네릭을 인터페이스로 보낸 뒤에 인터페이스는 제네릭을 사용함
interface SStorage<T> {
    [key:string]: T
}


class LocalStroage<T> {
    private storage : SStorage<T> = {}
    set(key:string, value:T){
        //이미 있는지 확인하는 if 문 추가해보기
        this.storage[key] = value;
    }
    remove(key:string){
        delete this.storage[key]
    }
    get(key:string):T{
        return this.storage[key]
    }
    clear(){
        this.storage = {}
    }
}

const stringStorage = new LocalStroage<string>();
stringStorage.get("ket") 

const booleanStorage = new LocalStroage<boolean>();
booleanStorage.get("boolean")