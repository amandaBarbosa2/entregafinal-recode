import React from "react"

export default function Promocoes() {
    return (
        <div>
            <div class="titleDes">
                <h2 class="t">Promoções</h2>
            </div>
            <section class="asidelist">

                <ol>
                    <h1 class="h1">Promoções</h1>
                    <li class="l">Bonito--MG</li>
                    <li class="l">Fernando de Noronha-PE</li>
                    <li class="l">Fortaleza-CE</li>
                    <li class="l">Rio de Janeiro-RJ</li>
                    <li class="l">São luís-MA</li>
                    <li class="l">Porto de Galinhas-PE</li>
                </ol>

                <div class="packages">
                    <table class="table2" />
                    <tr>
                        <td class="immg">
                            <img src="./imagens/bonito 2.jpg" class="img" alt="Bonito-MS" />
                            <br />
                            <font class="font4">Bonito-MG</font>
                            <hr />
                            <font class="font3"><strike>R$ 789,00</strike></font><br />
                            <font class="font1">R$ 700,00</font><br />
                            <font class="font2">4 dias hospedado(s) na aconchegante Pousada Luz.</font><br />
                        </td>
                        <td class="immg">
                            <img src="./imagens/fernandodenoronha.png" class="img" alt="Fernando de Noronha" />
                            <br />
                            <font class="font4">Fernando de Noronha-PE</font>
                            <hr />
                            <font class="font3"><strike>R$ 3.889,00</strike></font><br />
                            <font class="font1">R$ 3.000,00</font><br />
                            <font class="font2">4 dias hospedado(s) na maravilhosa Pousada Leão Marinho.</font><br />
                        </td>
                        <td class="immg">
                            <img src="./imagens/fortaleza.png" class="img" alt="Fortaleza" />
                            <br />
                            <font class="font4">Fortaleza-CE</font>
                            <hr />
                            <font class="font3"><strike>R$ 1.089,00</strike></font><br />
                            <font class="font1">R$ 1.000,00</font><br />
                            <font class="font2">5 dias hospedado(s) na encantada Magia.</font><br />
                        </td>
                        <td class="immg">
                            <img src="./imagens/rio de janeiro.png" class="img" alt="Rio de Janeiro" />
                            <br />
                            <font class="font4">Rio de Janeiro-RJ</font>
                            <hr />
                            <font class="font3"><strike>R$ 2.096,00</strike></font><br />
                            <font class="font1">R$ 2.096,00</font><br />
                            <font class="font2">5 dias hospedado(s) na Pousada Maravilhosa.</font><br />
                        </td>
                        <td class="immg">
                            <img src="./imagens/maranhao.png" class="img" alt="Rio de Janeiro" />
                            <br />
                            <font class="font4">São Luís-MA</font>
                            <hr />
                            <font class="font3"><strike>R$ 1.189,00</strike></font><br />
                            <font class="font1">R$ 1.000,00</font><br />
                            <font class="font2">5 dias hospedado(s) na iluminada Pousada Sol.</font><br />
                        </td>
                        <td class="immg">
                            <img src="./imagens/porto de galinhas.png" class="img" alt="Rio de Janeiro" />
                            <br />
                            <font class="font4">Porto de Galinhas-PE</font>
                            <hr />
                            <font class="font3"><strike>R$ 384,00</strike></font><br />
                            <font class="font1">R$ 300,00</font><br />
                            <font class="font2">5 dias hospedado(s) na Pousada Good Vibes..</font><br />
                        </td>
                    </tr>
                </div>
            </section>
        </div>
    );
}