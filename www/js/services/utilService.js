app.service('Util', function () {
    return {
        obterObjeto: obterObjeto,
        salvarObjeto: salvarObjeto,
        converterParaObjeto: converterParaObjeto,
        criarGuid: criarGuid
    };

    function obterObjeto(chave) {
        var valor = window.localStorage.getItem(chave);

        if (valor == null || valor == '') {
            valor = '';
        }

        return valor;
    }

    function salvarObjeto(chave, valor) {
        window.localStorage.setItem(chave, JSON.stringify(valor));
    }

    function converterParaObjeto(valor) {
        return JSON.parse(valor);
    }

    function criarGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
});