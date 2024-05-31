// src/Chatbot.js
import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
  {
    id: '1',
    message: 'שלום! במה אפשר לעזור לך?',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 'appointment', label: 'קביעת פגישה עם נציג שירות', trigger: '3' },
      { value: 'call', label: 'קביעת שיחה עם נציג שירות', trigger: '4' },
      { value: 'inventory', label: 'לבירורים לגבי מלאי מוצרים', trigger: '5' },
      { value: 'homework', label: 'לבירורים לגבי שיעורי בית', trigger: '6' },
      { value: 'sea_scouts', label: 'צופי ים', trigger: '7' },
      { value: 'workshop', label: 'סדנת מיקרוביט', trigger: '8' },
      { value: 'other', label: 'אחר', trigger: '9' },
    ],
  },
  {
    id: '3',
    message: 'בחרת קביעת פגישה עם נציג שירות. אנא השיבו תאריך ושעה רצויים וניצור עמכם קשר',
    trigger: '10'
  },
  {
    id: '4',
    message: 'בחרת קביעת שיחה עם נציג שירות. אנא השיבו תאריך ושעה רצויים וניצור עמכם קשר.',
    trigger: '10',
  },
  {
    id: '5',
    message: 'בחרת לבירורים לגבי מלאי מוצרים. אנא השאירו את פרטיכם וניצור עמכם קשר.',
    end: true,
  },
  {
    id: '6',
    message: 'בחרת לבירורים לגבי שיעורי בית. אנא השאירו את פרטיכם וניצור עמכם קשר.',
    end: true,
  },
  {
    id: '7',
    message: 'נרשמה פנייה חדשה בנושא צופי ים',
    trigger: '12',
  },
  {
    id: '8',
    message: 'בחרת סדנת מיקרוביט. אנא השאירו את פרטיכם וניצור עמכם קשר.',
    trigger: '10',
  },
  {
    id: '9',
    message: 'בחרת אחר. אנא השאירו את פרטיכם וניצור עמכם קשר.',
    trigger: '10',
  },
  {
    id: '10',
    user: true,
    trigger: '11',
  },
  {
    id: '11',
    message: 'הפנייה התקבלה בהצלחה, נציג שירות ישוב אליכם במהרה!',
    end: true,
  },
  {
    id: '12',
    options: [
      { value: 'option_1', label: 'לבירורים לגבי נוכחות בפעולה', trigger: '14' },
      { value: 'option_2', label: 'לבירורים בנושא אחר', trigger: '13' },
    ],
  },
  {
    id: '13',
    message: 'אנא השיבו את נושא הפנייה',
    trigger: '10',
  },
  {
    id: '14',
    message: 'אנא השיבו את תאריך הפעולה הרצוי',
    trigger: '10',
  },
];

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Arial, Helvetica, sans-serif',
  headerBgColor: '#00B2B2',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#00B2B2',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const Chatbot = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} />
    </ThemeProvider>
  );
};

export default Chatbot;