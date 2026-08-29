{/*
const = constante
ou seja, é uma variável que não muda de valor
em altura nenhuma do programa

!!!! caso tento alterar o valor de uma constante, 
o programa dá erro !!!!

*/}

const visitLinks = [
    /*
    label: 'Horários': É o texto que o utilizador vai ver no ecrã (o nome do botão ou link).
    href: '#horarios': É o destino do link. O símbolo # indica uma âncora, o que significa que, ao clicar, a página não muda; 
    em vez disso, o ecrã desliza automaticamente para a secção que tem o ID horarios na mesma página.

    ao usar {} estou a criar um objecto
    [] são para criar o array */
     
    { label: 'Horários', href: '#horarios' },
    { label: 'Bilhetes', href: '#bilhetes' },
    { label: 'Acessos', href: '#acessos' },
    { label: 'Acessibilidade', href: '#acessibilidade' },
    { label: 'Regras de Visita', href: '#regras' },
];

/*Agora cria-se a função VisitHero 

function: A palavra-chave que avisa o computador que vai criar uma ação ou bloco de código executável.
VisitHero: O nome da função. 
O termo "Hero" na web refere-se à primeira secção de uma página (aquele banner principal de destaque com um título grande e botão).
(): O espaço para os parâmetros (as entradas de dados da função), que neste momento está vazio.
{}: O corpo da função, onde vai escrever o código que faz o componente funcionar ou renderizar o HTML.

uma função escrita com a primeira letra maiúscula (PascalCase) costuma ser um Componente 

*/
function VisitHero() {
    return (
        <section className="visit-hero" id="visitar">
            <div className="container">
                <h1>Planeie a sua visita</h1>
                <p>
                    Tudo o que precisa de saber antes de nos visitar — horários, bilhetes,
                    acessos e boas práticas para desfrutar do jardim em segurança.
                </p>
                <nav className="visit-subnav" aria-label="Secções de visita">
                    {visitLinks.map((link) => (
                        <a className="pill pill--terracota" href={link.href} key={link.label}>
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </section>
    );
}

export default VisitHero;