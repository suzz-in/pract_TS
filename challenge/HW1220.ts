interface LocalStorageAPI<T> {
    [key: string] : T
}

class LocalStorage<T> {
    private storage : LocalStorageAPI<T> = {}
    setItem(key:string, value: T){
        if(!this.storage.hasOwnProperty(key)){
             this.storage[key] = value;
        }
    }
    getItem(key:string):T{
        return this.storage[key]
    }
    clearItem(key:string){
        delete this.storage[key]
    }
    clear(){
        this.storage = {}
    }
}
interface GeolocationAPI {
    
}