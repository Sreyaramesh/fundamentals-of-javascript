class coffee
{
#boilwater()
{
console.log("boil at 1oo degree ");
}
#addmilk()
{
console.log("milk added ");

}
#addsugar()
{
console.log("sugar added ");

}
makeyourcoffe()
{
    this.#boilwater();
    this.#addmilk();
    this.#addsugar();
}
makeyourwithoutcoffe()
{
    this.#boilwater();
    this.#addmilk();

}
}
const ob1=new coffee();
ob1.makeyourcoffe();
ob1.makeyourwithoutcoffe();
