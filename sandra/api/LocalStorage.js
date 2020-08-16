var NodeStorage = (function () {
    function NodeStorage() {
    }
    NodeStorage.add = function (name, data) {
        if (typeof name !== 'string') {
            console.error('Nome do objeto é invalido');
            return false;
        }
        if (typeof data === 'object') {
            data = JSON.stringify(data);
        }
        else if (typeof data === 'function') {
            console.error('Você não pode armazernar uma function na sessao!');
            return false;
        }
        if (typeof data === 'string') {
            window.localStorage.setItem(name, data);
        }
        else {
            console.error('Dados com formato invalido! Não é numero, não é objeto e nem uma string! < o.O >');
            return false;
        }
    };
    NodeStorage.get = function (name, object) {
        if (object === void 0) { object = false; }
        if (!name) {
            alert('Nome do objeto é invalido');
            return false;
        }
        if (object)
            return JSON.parse(window.localStorage.getItem(name));
        else
            return window.localStorage.getItem(name);
    };
    return NodeStorage;
}());
var $storage = new NodeStorage();
//# sourceMappingURL=LocalStorage.js.map