import { ReactComponent as Air } from "../icons/air.svg";
import { ReactComponent as Arbitrage } from "../icons/arbitrage.svg";
import { ReactComponent as Box } from "../icons/box.svg";
import { ReactComponent as Head } from "../icons/head.svg";
import { ReactComponent as Market } from "../icons/market.svg";
import { ReactComponent as Multi } from "../icons/multi.svg";


const icons = {
  air: <Air />,
  arbitrage: <Arbitrage/>,
  box: <Box />,
  head: <Head />,
  market: <Market />,
  multi: <Multi />,
};

const need = [
    {
    icon: icons.multi,
    head: "Мультиаккаунт SMM",
    text: "Вы можете одновременно управлять сотнями учетных записей в социальных сетях. Multiaccount поможет защитить ваш аккаунт от бана надежно скрывая его от систем антифрода Google/facebook/Instagram.",
    },
    {
        icon: icons.market,
        head:'Рекламные площадки',
        text:'все основные рекламные платформы используют сложные алгоритмы для защиты от запуска нескольких учетных записей с одного и того же устройства, но теперь вам больше не нужно об этом беспокоиться, поскольку вы можете запускать каждую учетную запись в полностью отдельной браузерной среде с помощью Multiaccount.',
    },
    {
    icon: icons.air,
    head:'Airdrop и Coinlist',
    text:'Токенсейл/Whitelist обойдите блокировку, создайте несколько аккаунтов для токенсейла и Whitelist, избегая баны, чтобы получить больше шансов заработать.',
    },
    {
    icon: icons.arbitrage,
    head: 'Арбитраж трафика',
    text:'',
    },
    {
    icon: icons.box,
    head:'Бонусхантинг',
    text:'',
    },
    {
    icon: icons.head,
    head:'Анонимность',
    text:'',
    },
];

// export default icons;
export default need;
