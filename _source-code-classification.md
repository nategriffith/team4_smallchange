# Source Code Classification

## Classification
The source code classification of this repository is defined in [__fmr-metadata.json_](_fmr-metadata.json). 
The classification level will be specifed under the key "sourceCodeClassification" with one of the following values: 
* Public
* Internal
* Confidential
* Highly Confidential

See the below sections for examples, links to documentation that describe the different classification levels, and more.

## Example
Here is an example of what a source code classification level of Internal would look like:
```javascript
{
	"sourceCodeClassification" : "Internal"
}
```

## Modifying the Classification Level
You can change the classification level of this repository by modifing the value specified for _sourceCodeClassification_ in  [__fmr-metadata.json_](_fmr-metadata.json).

## Help Links
* [Ribbit Page detailing Classification Levels](https://ribbit.fmr.com/groups/source-code-classification)
* [TD-715](http://archer.fmr.com/archer/foundation/Workspace.aspx?workspaceId=-1&requestUrl=..%2fGenericContent%2fRecord.aspx%3fid%3d1307741%26moduleId%3d161)
* [FTCS-960](http://archer.fmr.com/archer/foundation/Workspace.aspx?workspaceId=-1&requestUrl=..%2fGenericContent%2fRecord.aspx%3fid%3d63697%26moduleId%3d66)