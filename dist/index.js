import { jsx } from "react/jsx-runtime";
//#region src/MyButtonStyle.module.css
var MyButtonStyle_module_default = {
	"fade-out": "eRYWUa_fade-out",
	"fade-out-on-hover": "eRYWUa_fade-out-on-hover"
};
//#endregion
//#region src/MyButton.tsx
console.log(MyButtonStyle_module_default);
const MyButton = () => {
	return /* @__PURE__ */ jsx("button", {
		className: MyButtonStyle_module_default["fade-out-on-hover"],
		children: "Hover to trigger fade out animation"
	});
};
//#endregion
export { MyButton };
