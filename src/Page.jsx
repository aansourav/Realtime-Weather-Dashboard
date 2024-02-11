import Header from "./components/header/Header";
import WeatherBoard from "./components/weatherBoard/WeatherBoard";

const Page = () => {
    return (
        <div className="grid place-items-center h-screen" >
            <Header />
            <main>
                <section>
                    <WeatherBoard/>
                </section>
            </main>
        </div>
    );
};

export default Page;