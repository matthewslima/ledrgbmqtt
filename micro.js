console.log('MQTT');

function enviarParaMQTT() {
    console.log('Entrou na função enviarParaMQTT'); // Mensagem de depuração

    const redValue = "2";

    // Configurar a conexão com o servidor MQTT
    const client = mqtt.connect('tcp://broker.mqtt.cool:1883'); // Use um servidor MQTT compatível com conexão segura (WebSocket)

    client.on('connect', function () {
        console.log('Conectado ao servidor MQTT');
        const message = redValue;

        // Publicar a mensagem no tópico desejado
        client.publish('ifce', message, function (err) {
            if (!err) {
                console.log('Mensagem enviada com sucesso.');
            } else {
                console.error('Erro ao enviar mensagem: ' + err);
            }
            client.end(); // Encerra a conexão após a publicação
        });
    });

    client.on('error', function (err) {
        console.error('Erro de conexão: ' + err);
    });
}
