# 如何 ...

## 在 TiDB 中新建一张（只读）infoschema表

PS. 加其他内存表预计也是相似的方法

1. 在 tidb 仓库的 `infoschema/tables.go`，向文件一开始那个大 enum 的最后添加一条 `TableXXX = "<表名>"`

   在下面的`tableIDMap`里为他添加一个`tableId`

   在下面的 `tableXXXCols` 里面添加这个表的 column 定义

   在下面的 `tableNameToColumns` 里面添加 `TableXXX` 到 `tableXXXCols `的映射

2. 在`executor/infoschema_reader.go`，为`memtableRetriever`，添加一个 `setDataForXXX`，这个函数的主要用途就是把数据转成`Datum`的样子然后放在 `memtableRetriever` 的 `rows` 里面，这里数据从哪里来我就不管了，你自己决定。

   然后在`memtableRetriever.retrieve` 里的大switch里面加一个case，case的键就是你在 1. 中写的那个 `TableXXX`，行为就是 `setDataForXXX`。

3. 在 `executor/builder.go` 中的 `executorBuilder.buildMemTable` 里的`case util.InformationSchemaName.L` 里的那个switch里面，加上对应的case，一般在最长的那坨case最后加一条`strings.ToLower(infoschema.TableXXX)` 就行

## debug TiDB/TiKV 接口

WIP

