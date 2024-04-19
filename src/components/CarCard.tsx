import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Input,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
// import { TiWeatherDownpour, TiWeatherSunny } from "react-icons/ti";
import { getCarData } from "../api/actions";

const CarCard: React.FC = () => {
  const [data, setData] = useState<CarsData>();
  const [loadingState, setLoadingState] = useState(false);
  const [manufacturer, setManufacturer] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    console.log("Fetching Car Data...");
    console.log(manufacturer);
    setLoadingState(true);
    getCarData(manufacturer)
      .then((res) => {
        setError("");
        if (res) {
          console.log(res);
          setData(res);
          setLoadingState(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoadingState(false);
        setData(undefined);
        setError(error);
      });
  };

  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="flex flex-col w-full p-2 space-y-4">
            <Input
              id="manufacturername"
              type="text"
              label="Manufacturer"
              value={manufacturer}
              onChange={(e) => {
                setManufacturer(e.target.value);
              }}
            />
            <Button
              className=""
              color="primary"
              isLoading={loadingState}
              type="submit"
            >
              Search
            </Button>
          </div>
        </form>
      </CardHeader>
      <Divider />
      {data ? (
        <CardBody>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold">{data.manufacturer}</h1>
            {/* {data.temperature > 20 ? (
              <div>
                <TiWeatherSunny className="w-36 h-36" />
              </div>
            ) : (
              <div>
                <TiWeatherDownpour className="w-36 h-36" />
              </div>
            )} */}
            <p className="text-3xl font-bold">{data.model}%</p>
            <p className="text-lg">Year: {data.year}%</p>
            <p className="text-lg">Color: {data.color} %</p>
            <p className="text-lg">Fuel Type: {data.fuelType} km/h</p>
            <p className="text-lg">Mileage: {data.mileage} %</p>
            <p className="text-lg">Price: {data.price} %</p>
            <p className="text-lg">Date Added: {data.dateAdded} %</p>
          </div>
        </CardBody>
      ) : (
        <CardBody>
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold">Please enter a car company</p>
          </div>
        </CardBody>
      )}
      <Divider />
      <CardFooter>
        <div className="flex flex-col items-left">
          {error && <p className="text-xs text-red-600 ">{error}</p>}
          {data && (
            <p className="text-xs  text-gray-600 ">Last update successful.</p>
          )}
          {!data && (
            <p className="text-xs  text-gray-600 ">Waiting for input...</p>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
