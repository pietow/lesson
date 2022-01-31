const obj = {
    a: 10,
    b: 5,
    get: function(){
        return this.a + this.b
    },
    set: function(a, b){
        this.a = a
        this.b = b
    }
}
obj.set(100, 500)
console.log(obj)
console.log(obj.get())