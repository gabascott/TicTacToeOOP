class JatekTer{
    #tomb = [];
    constructor(){
        const szuloElem = $("article");
        this.lepes = 0;
        for (let index = 0; index < 9; index++) {
            const elem = new Elem(szuloElem);
            this.#tomb.push(elem);
        }

        $(window).on("kivalaszt", (event)=>{
            //console.log(event.detail);
            let aktElem = event.detail;
            if (this.lepes % 2 == 0) {
                aktElem.setElem("X");
            }else {
                aktElem.setElem("O");
            }
            this.lepes++;
        });
    }
}