/*
novamente vamos criar uma variável constante chamada infoCards,
que vai guardar um array []

dentro do array vamos criar objectos {}, cada objecto vai ter 3 propriedades:
- id: um identificador único para cada card, que vai ser usado como o id do elemento HTML correspondente
- title: o título do card, que vai ser exibido como um cabeçalho
- content: o conteúdo do card, que vai ser exibido como um parágrafo ou outros elementos HTML

*/

const infoCards = [
    {
        id: 'horarios',
        title: 'Horário de Funcionamento',
        content: (
            <>
                <p>Terça a domingo: 9h00 – 19h00<br /><small>(última entrada às 18h00)</small></p>
                <p>Segunda-feira: encerrado<br /><small>(exceto feriados)</small></p>
            </>
        ),
    },
    {
        id: 'bilhetes',
        title: 'Bilhetes',
        content: (
            <p>
                A entrada é gratuita para menores de 12 anos, estudantes e residentes
                no concelho. Consulte os restantes preços e descontos disponíveis.
            </p>
        ),
        button: { label: 'Comprar Bilhetes Online', href: '#' },
    },
    {
        id: 'acessos',
        title: 'Como Chegar',
        content: (
            <p>
                O jardim está acessível a pé, de transporte público e dispõe de parque
                de estacionamento próprio. Consulte o mapa e os melhores acessos.
            </p>
        ),
        button: { label: 'Ver no Mapa', href: 'https://www.google.com/maps' },
    },
    {
        id: 'acessibilidade',
        title: 'Acessibilidade',
        content: (
            <p>
                Percursos adaptados a pessoas com mobilidade reduzida, cadeiras de
                rodas disponíveis mediante reserva e apoio dedicado à chegada.
            </p>
        ),
    },
    {
        id: 'regras',
        title: 'Boas Práticas',
        content: (
            <p>
                Para preservar a flora e garantir uma experiência agradável a todos,
                pedimos que não colha plantas, mantenha os animais de estimação presos
                pela trela e respeite os percursos sinalizados.
            </p>
        ),
    },
];

/*
agora vamos criar a função VisitInfo, que vai ser o componente React responsável por exibir os cards de informação
dentro da função vamos retornar um elemento <section> com a classe visit-info,
que vai conter um <div> com a classe container, que vai conter os cards de informação

cada card vai ser um <article> com a classe info-card, que vai ter o id do card e uma key para o React
dentro de cada <article> vamos exibir o título do card como um <h2>, 
o conteúdo do card e, se houver, 
um botão com a classe btn btn--primary

*/

function VisitInfo() {
    return (
        <section className="visit-info">
            <div className="container">
                {infoCards.map((card) => (
                    <article className="info-card" id={card.id} key={card.id}>
                        <h2>{card.title}</h2>
                        {card.content}
                        {card.button && (
                            <a className="btn btn--primary" href={card.button.href}>
                                {card.button.label}
                            </a>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
}

export default VisitInfo;