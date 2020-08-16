/**
 * Serviço de comunicação com a API
 *
 * @constructor
 */
const HttpClient = function()
{
    const self = this;

    self.url = 'https://greatsystems.com.br/manteli/api/index.php';

    this.post = function(params)
    {
        return $.post(self.url, {
            ...params, ...{ token :  window.localStorage.getItem('token') }
        });
    };

    this.get = function(params)
    {
        return $.get(self.url, {
            ...params, ...{ token :  window.localStorage.getItem('token') }
        });
    };
};
