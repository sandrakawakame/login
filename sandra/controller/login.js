const login = function () {
        const params = {
            controller: 'authentication',
            action: 'login',
            data: {
                login: $('#user').val(),
                senha: $('#password').val(),
                expiravel: 0,
                produto: 2
            }
        }

        const httpClient = new HttpClient();
        httpClient.post(params).then(response => {
            console.log(localStorage)
            //localStorage.setItem('token', response.token)
            NodeStorage.add('token', response.token);
            NodeStorage.add('usuario', { 
                nome : response.nome,
                email: response.email
            });
            console.log(NodeStorage.get('token'))
            console.log(NodeStorage.get('usuario', true).email)
        }).fail(responseError => {
            console.log(responseError)
        })

    
}
