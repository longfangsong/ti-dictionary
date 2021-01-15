# 在哪个环节...

## 打到TiKV上的消息知道自己在哪个Region上

在消息打到 RaftStoreRouter 前，无论所有的消息都是统一处理的。