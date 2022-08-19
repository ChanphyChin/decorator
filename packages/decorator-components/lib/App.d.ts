import './App.scss';
interface Props {
    updateConfig: {
        (config: any): void;
    };
    config: any;
}
declare const App: (props: Props) => JSX.Element;
export default App;
