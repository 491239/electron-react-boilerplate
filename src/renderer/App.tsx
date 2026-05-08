import { FormattedMessage, IntlProvider } from 'react-intl';
import icon from '../../assets/icon.svg';
import { useI18n } from './i18n/I18nProvider';
import { locales, Language } from './i18n/config';
import './App.css';

function Hello() {
  const { language, setLanguage } = useI18n();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <IntlProvider locale={language} messages={locales[language]}>
      <div>
        <div className="Hello">
          <img width="200" alt="icon" src={icon} />
        </div>
        <h1>
          <FormattedMessage id="page.home.title" />
        </h1>
        <p>
          <FormattedMessage id="page.home.description" />
        </p>

        {/* Language Switcher */}
        <div className="LanguageSwitcher" style={{ marginBottom: '20px' }}>
          <label>
            <FormattedMessage id="common.language" />:{' '}
          </label>
          <select
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value as Language)}
            style={{ marginLeft: '10px', padding: '5px' }}
          >
            <option value="en-US">
              <FormattedMessage id="common.english" />
            </option>
            <option value="zh-CN">
              <FormattedMessage id="common.chinese" />
            </option>
          </select>
        </div>

        <div className="Hello">
          <a
            href="https://electron-react-boilerplate.js.org/"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button">
              <FormattedMessage id="page.home.readDocs" />
            </button>
          </a>
          <a
            href="https://github.com/sponsors/electron-react-boilerplate"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button">
              <FormattedMessage id="page.home.donate" />
            </button>
          </a>
        </div>
      </div>
    </IntlProvider>
  );
}

export default Hello;
