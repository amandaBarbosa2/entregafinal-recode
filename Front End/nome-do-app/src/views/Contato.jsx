import React from "react";



export default function Contato() {
    return (
        <div>
            <div class="titleDes">
                <h2 class="t">Contato</h2>
            </div>
            <table class="table">
                <tr>
                    <td class="eu">
                        <img src="./imagens/email.png" alt="e-mail" class="a" />
                        <font class="font2">contato@voe.com.br</font>
                    </td>
                    <td class="eu">
                        <img src="./imagens/whatsapp.jpg" alt="whatsapp" class="a" />
                        <font class="font2">(21) 4002 8922</font>
                    </td>
                </tr>
            </table>
            <div class="forminput">
                <div>
                    <label for="nome" class="s">Nome: </label><br />
                    <textarea rows="2" cols="52.5"></textarea><br /><br />

                    <label for="mensagem" class="s">Mensagem: </label><br />
                    <textarea rows="20" cols="52.5"></textarea>
                    <input type="Submit" value="Enviar" />
                </div>
            </div>
        </div>
    );
}