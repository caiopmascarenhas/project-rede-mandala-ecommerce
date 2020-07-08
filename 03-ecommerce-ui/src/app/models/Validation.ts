import { FormControl } from '@angular/forms';



export class Validation{

    static AnoBissexto(control: FormControl){
        const anoBi = control.value;
        
        const regex = new RegExp(/^((((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|1[02])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\.\-\/](0?[13456789]|1[012])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00))))$/);
        if(regex.test(anoBi)){
           return null;
        }else{

            return {dataInvalida:true}
        }
    }


//Maior que 18 anos
    static MaiorQue18Anos(control : FormControl){
        const nascimento: string = control.value;
        const [dia, mes, ano] = nascimento.split('/');
        const hoje = new Date();
       
        const dataNascimento = new Date(+ano, +mes, +dia, 0,0,0);
        const tempoParaTeste = 1000*60*60*24*365*18;
        if(hoje.getTime() - dataNascimento.getTime() >= tempoParaTeste)
            return null;
        return{ menorDeIdade : true};
    }

    // verifica se confirmar senha é igual a nova senha
    static passwordValidate(control: FormControl){
        const novaSenha = control.get('novaSenha').value;
        const confirmarSenha = control.get('confirmarSenha').value;

        if(confirmarSenha.length == 0){
            return null;
        }
        if(novaSenha == confirmarSenha){
    
            return null
        }else{
            control.get('confirmarSenha').setErrors({senhasDiferentes: true});
        }
    }

    // Verifica se o número de cpf é valido
    static cpfValidate(controle: FormControl){

        const cpf: string = controle.value;

        let soma:number = 0;
        let resto:number = 0;
        if(cpf.length == 0){
            return null;
        }
        if (cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999"
        ) {
            return { invalidCpf: true};
        }
        for (let i = 1; i <= 9; i++) {
            soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }
        resto = (soma * 10) % 11;

        if ((resto == 10) || (resto == 11)) {
            resto = 0;
        }
        if (resto != parseInt(cpf.substring(9, 10))) {
            return { invalidCpf: true};
        }

        soma = 0;

        for (let i = 1; i <= 10; i++) {
            soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        }
        resto = (soma * 10) % 11;

        if ((resto == 10) || (resto == 11)) {
            resto = 0;
        }
        if (resto != parseInt(cpf.substring(10, 11))) {
            return { invalidCpf: true};
        }
        return null;


    }


    }

