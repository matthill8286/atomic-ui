# Asset Tile Compact

This component provides line-item view for assets. Use cases are, for example, the History view, so far. 
In contrast to other fully integrated components, AssetLineItems are intended to be used in a more composed ways.

* in contrast to the AssetTiles, this component does not take a full asset data structure and derives all properties on its own, instead, it expects all props to be directly passed on to the component
* you can pass children, which will be rendered below the main content
* Storybook contains integration-examples for how History UI could be built
* there is no border around the component, instead, simply place it in a `Card` that can be configured to match the style.
