var Color = require("color")

var primary_shade = Color("#37474F");
var primary_light = Color("#78909C");
var primary_dark = Color("#263238");

var accent_shade = Color("#0091EA");
var accent_light = Color("#00B0FF");

var primary = Color("#37474F");
var secondary = Color("#453F41");
var sidebar = Color("#78909C");

var darken = primary.darken(0.2).hexString().toString();

module.exports = {
	brandPrimary : primary.hexString().toString(),
	darker: darken,
	brandSecondary: secondary.hexString().toString(),
	brandSidebar: sidebar.hexString().toString()
}