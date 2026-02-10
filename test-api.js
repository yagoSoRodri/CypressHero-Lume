async function testLogin() {
    console.log('--- Iniciando Validação Técnica (QA Senior) ---');
    try {
        const response = await fetch('http://localhost:3001/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: 'admin@test.com',
                password: 'test123'
            })
        });

        if (response.status === 201 || response.status === 200) {
            const data = await response.json();
            console.log('✅ Sucesso: API de Autenticação está respondendo corretamente.');
            console.log('✅ Usuário autenticado:', data.user.email);
            console.log('✅ Permissão Admin:', data.user.isAdmin);
        } else {
            console.log('❌ Erro: API retornou status', response.status);
        }

        const heroesResponse = await fetch('http://localhost:3001/heroes');
        if (heroesResponse.ok) {
            const heroes = await heroesResponse.json();
            console.log('✅ Sucesso: Listagem de heróis via API está funcionando.');
            console.log('✅ Quantidade de heróis encontrados:', heroes.length);
        }

    } catch (error) {
        console.log('❌ Erro ao conectar com a aplicação:', error.message);
        console.log('Certifique-se de que "npm run dev" ainda está rodando.');
    }
}

testLogin();
