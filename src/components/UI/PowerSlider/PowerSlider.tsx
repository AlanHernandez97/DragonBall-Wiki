interface PowerSliderProps {
    label: string;
    value: string;
    maxValue: string;
    color?: string;
}

const safeBigInt = (value: string) => {
    try {
        return BigInt(value);
    } catch {
        return 0n;
    }
};

const formatPower = (num: string) => {
    const parsed = Number(num);

    if (isNaN(parsed)) return num;

    return new Intl.NumberFormat("en-US").format(parsed);
};

const PowerSlider = ({
    label,
    value,
    maxValue,
    color = "#ff9f43",
}: PowerSliderProps) => {

    const current = safeBigInt(value);
    const max = safeBigInt(maxValue);

    const percentage =
        max > 0n
            ? Number((current * 100n) / max)
            : 0;

    return (
        <div className="w-full bg-[#191C22] p-4 rounded-2xl text-white space-y-3">
            <div className="flex justify-between items-center">
                <h2
                    className="uppercase font-bold tracking-wide text-lg"
                    style={{ color }}
                >
                    {label}
                </h2>

                <span className="text-3xl font-extrabold">
                    {formatPower(value)}
                </span>
            </div>

            <div className="w-full h-5 bg-[#FF8A00] rounded-full overflow-hidden">
                <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                        width: `${Math.min(percentage, 100)}%`,
                        background: color,
                        boxShadow: `0 0 20px ${color}`,
                    }}
                />
            </div>
        </div>
    );
};

export default PowerSlider;