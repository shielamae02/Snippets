export const Button = ({
    children,
    loading = false,
    disabled,
    className = "",
    ...props
}) => {
    disabled = disabled || loading;

    return (
        <button
            disabled={disabled}
            className={`bg-primary-light px-5 py-3 flex items-center justify-center text-md text-white rounded-lg shadow-xl font-semibold  
			${className} ${disabled
                    ? "opacity-80 cursor-not-allowed"
                    : "transform hover:-translate-y-px focus:shadow-sm focus:-translate-y-0"
                }
			`}
            {...props}
        >
            {!disabled && !loading}
            {loading && (
                <div className="relative animate-spin w-6 h-6 rounded-full border-4 border-tertiary-light border-t-jetblack-light mr-2" />
            )}
            {children}
        </button>
    );
};

export default Button;