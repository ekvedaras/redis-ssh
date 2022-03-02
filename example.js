async function main() {
  const { client, close } = await Redis.connect(
    {
      host: '',
      user: '',
      privateKey: fs.readFileSync('./*.pem'),
    },
    {
      socket: {
        host: '',
        port: 0,
      },
      password: '',
    }
  );

  client.doSomething('', function() {
    close();
  });
}
