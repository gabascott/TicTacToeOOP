class Elem{
    constructor(szuloElem){
        this.node = szuloElem;
        this.elem = szuloElem.append("<div><p></p></div>");
        this.elem = this.node.children("div:last")
        this.ertek = "-";
        this.pElem = this.elem.children("p");
        this.aktiv = true;

        this.elem.on("click", ()=>{
            //console.log("halihó");
            if (this.aktiv) {
                this.kattintasTrigger();
                this.aktiv = false;
            }
        });
    }
    setElem(ertek){
        this.ertek = ertek;
        this.pElem.html(ertek);
    }
    kattintasTrigger(){
        let esemeny = new CustomEvent("kivalaszt", {detail:this});
        window.dispatchEvent(esemeny);
    }
}