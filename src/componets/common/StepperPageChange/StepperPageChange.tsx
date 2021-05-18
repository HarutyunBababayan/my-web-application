import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import {NavLink} from 'react-router-dom';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const tutorialSteps = [
    {
        label: 'Индивидуальное решение SCANNER',
        textHeader: 'Подойдет Вам, если Вы:',
        textArr: [`Хотите получить новые возможности от GPS / ГЛОНАСС маяка SCANNER или создать уникальное оборудование “под ключ”?`, `Думаете, как подключить дополнительные функции к системе спутникового
                    мониторинга SCANNER?`, `Не знаете, как адаптировать программное обеспечение под индивидуальные
                    особенности Вашего бизнеса?`],
        buttonText: 'Подробнее',
        page: 'solutions',
        component: 'individual_decision'
    },
    {
        label: 'Лизинг без нарушений',
        textHeader: 'Будет для Вас полезным решением, если Вы:',
        textArr: [`Являйтесь Владельцем или сотрудником Службы безопасности Лизинговой
                    компании?`, `Думаете о том, чтобы клиенты не нарушали договоренностей и не выезжали за пределы установленной зоны?`, `Хотите снизить риски потери транспорта в течение всего срока действия
                    Договора лизинга и быть уверенным в его целости и сохранности?`],
        buttonText: 'Подробнее',
        page: 'solutions',
        component: 'leasing'
    }, {
        label: 'Выгодное телематическое страхование',
        textHeader: 'Станет для Вас выгодным решением, если Вы:',
        textArr: [`Клиенты не торопятся расставаться с деньгами на страховку и не
                                        соглашаются
                                        на Ваши условия?`, `Вы думаете, как выделиться на фоне других страховых компаний и
                                        предоставить
                                        более выгодные условия сотрудничества?`, `Хотите обезопасит себя от ненадежных сделок?`],
        buttonText: 'Подробнее',
        page: 'solutions',
        component: 'insurance'
    }, {
        label: 'GPS / ГЛОНАСС контроль мусоровозов и контейнеров для сбора и вывоза ТБО',
        textHeader: 'Станет для Вас практичным решением, если Вы:',
        textArr: [`Мечтаете, повысить качество обслуживания и снизить себестоимость
                                        работ?`, `Хотите соблюдать сроки вывоза мусора?`, `Думаете, как пресечь пропуск площадок, образование несанкционированных
                                        полигонов?`],
        buttonText: 'Подробнее',
        page: 'solutions',
        component: 'solid_waste_containers'

    }, {
        label: 'Спецслужбы быстрого реагирования',
        textHeader: 'Станет для Вас верным решением, если Вы:',
        textArr: [`Стремитесь автоматизировать процесс передвижения транспорта?`, `Хотите сократить время прибытия транспорта на объект?`,
            `Думаете, как повысить слаженность действий бригад и диспетчеров?`],
        buttonText: 'Подробнее',
        page: 'solutions',
        component: 'special_services'
    }, {
        label: 'SCANNER с заботой о людях и питомцах',
        textHeader: 'Станет для Вас актуальным решением, если Вы:',
        textArr: [`Хотите знать, где находятся Ваши близкие?`,
            `Думайте, как обеспечить безопасность родных, когда Вас нет рядом?`,
            `Мечтаете избавиться от лишних переживаний и беспокойства?`],
        buttonText: 'Подробнее',
        page: 'solutions',
        component: 'control_over_people_and_pets'
    }, {
        label: 'Грузоперевозки без потерь',
        textHeader: 'Станет для Вас эффективным решением, если Вы:',
        textArr: [`Хотите уменьшить расходы на обслуживание и содержание транспорта?`,
            `Думаете, как выявить факты нецелевого использования и нарушения правил
            эксплуатации техники?`, `Хотите избежать потери и порчи грузов во время транспортировки и
                                        соблюдать
                                        сроки поставки?`],
        buttonText: 'Подробнее',
        page: 'solutions',
        component: 'cargo_transportation'
    }, {
        label: 'Спецтехника без лишних затрат',
        textHeader: 'Станет для Вас актуальным решением, если Вы:',
        textArr: [`Устали платить за топливо и ремонт?`,
            `Хотите пресечь нецелевое использование техники?`,
            `Думаете, как сократить расходы на обслуживание и содержание транспорта?`],
        buttonText: 'Подробнее',
        page: 'solutions',
        component: 'special_equipment'
    }, {
        label: 'Шеринг - умный бизнес под контролем SCANNER',
        textHeader: ' Будет для Вас отличным решением, если Вы:',
        textArr: [`Думаете, как автоматизировать взаимодействие с клиентами?`,
            `Хотите сделать аренду транспорта безопасной, но при этом выгодной для
                                        клиентов?`,
            `Мечтаете снизить затраты на обслуживание и содержание транспортных
                                        средств?`],
        buttonText: 'Подробнее',
        page: 'solutions',
        component: 'sharing'
    }, {
        label: 'Личный транспорт под чутким присмотром SCANNER',
        textHeader: 'Станет для Вас оптимальным решением, если Вы:',
        textArr: [`Думаете, как обеспечить сохранность своего транспортного средства?`,
            `Хотите препятствовать эвакуации и быстро вернуть транспортное средство в
                                        случае угона?`,
            `Хотите препятствовать эвакуации и быстро вернуть транспортное средство в
                                        случае угона?`],
        buttonText: 'Подробнее',
        page: 'solutions',
        component: 'personal_transport'
    }
]

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 700,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 255,
        display: 'block',
        maxWidth: 400,
        overflow: 'hidden',
        width: '100%',
    },
}));

interface IProps {
    data: any[],
    classesName: any
}

const StepperPageChange: React.FC<IProps> = ({data, classesName}) => {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    return (
        <div className={classes.root}>
            <AutoPlaySwipeableViews
                index={activeStep}
                animateTransitions={true}
                onChangeIndex={handleStepChange}
                enableMouseEvents={false}
                disabled={true}
            >
                {data.map((step, index) => (
                    <div key={index}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <aside className="decision_answer">

                                <div className={classesName.mainNewsBlock}>
                                    <img className={classesName.imageNewsStyle} src={require("../../../assets/images/" + step.image).default} alt="Covid"/>
                                    <NavLink className={classesName.navLinkTextDecoration}
                                             to={'/europeBreakingNews/'}><span
                                        className={classesName.headingText}>{step.title}</span></NavLink>
                                    <p className={classesName.paragraphText}>   {step.text}</p>
                                </div>

                                {/*<NavLink to={step.page} onClick={() => alert('ok')}>*/}
                                {/*    <div className="equipment_button">*/}
                                {/*        <div className="equipment_texn" onClick={() => alert('YTN')}>Подробнее</div>*/}
                                {/*    </div>*/}
                                {/*</NavLink>*/}
                            </aside>
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>

            <MobileStepper
                variant="dots"
                steps={data.length}
                position="static"
                activeStep={activeStep}
                color={'red'}

                className={classes.root}
                nextButton={
                    <Button size="small" onClick={handleNext}
                            disabled={activeStep === data.length - 1}>{theme.direction === 'rtl' ?
                        <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
                    </Button>
                }
            />
        </div>
    );
}

export default React.memo(StepperPageChange);