// Função para fazer login e exibir o token gerado
document.getElementById('loginBtn').addEventListener('click', async () => {
  const username = document.getElementById('username').value;

  if (!username) {
      alert('Please enter a username');
      return;
  }

  const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username })
  });

  const result = await response.json();

  // Exibe o token gerado após o login
  document.getElementById('tokenDisplay').innerHTML = `<strong>Generated Token:</strong> ${result.token}`;
});

// Função para testar o token
document.getElementById('testToken').addEventListener('click', async () => {
  const token = document.getElementById('token').value;

  if (!token) {
      alert('Please enter a token');
      return;
  }

  const response = await fetch('/api/protected', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token })
  });

  const result = await response.json();

  document.getElementById('result').innerHTML = `<strong>Response:</strong> ${JSON.stringify(result)}`;
});

// Função para revogar o token
document.getElementById('revokeTokenBtn').addEventListener('click', async () => {
  const token = document.getElementById('revokeToken').value;

  if (!token) {
      alert('Please enter a token to revoke');
      return;
  }

  const response = await fetch('/api/revoke', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token })
  });

  const result = await response.json();

  document.getElementById('result').innerHTML = `<strong>Revoke Response:</strong> ${JSON.stringify(result)}`;
});
