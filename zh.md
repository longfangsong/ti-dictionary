| 名称               | 别称/简称                                             | 类型    | 简介                                           | 外部链接                                                        |
| ---------------------- | ------------------------------------------------------ | ------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| active_expire |  | 概念 | In DetectTable, iterates the whole table to remove all expired entries. | [代码](https://github.com/tikv/tikv/blob/3338f2982b6d3387727a53c5e94d59819a43d76a/src/server/lock_manager/deadlock.rs#L218) |
| amendSchema | amend | 概念 | 当有并发进行的DDL时，事务可以自动修改其mutation以减少 commit 失败的情况。 | [代码](https://github.com/pingcap/tidb/blob/eae64e40fee5976dc8d22ab5ad27b3f0cdba8a67/store/tikv/txn.go#L51), [代码](https://github.com/pingcap/tidb/blob/d19a21d92a9b9409ee8f1c7dbb197fdcf5b7c06c/session/schema_amender.go) |
| Async Commit | Parallel commit | 特性 | 2pc 过程的一个优化，在所有prewrite都成功后立即返回。 | [文档](https://github.com/tikv/sig-transaction/tree/master/design/async-commit) |
| CIStr |  | 概念 | 大小写无关字符串。 | [代码](https://github.com/pingcap/parser/blob/44f6be1df1c40f366a708a5c3bb88e9a64482e44/model/model.go#L1016) |
| Commit | | 概念 | 一次提交，指整个事务的提交。 |  |
|  | | 概念 | 2阶段提交中的第二个阶段。 |  |
| | | 概念 | Raft中的一个动作，该动作在某个log entry上完成后，代表这个log entry已经被 Raft 接受，并最终会在每个节点上应用（Apply）。 | |
|  | | 概念 | TiKV's 事务系统中的一个 Command。用于在事务中进行2阶段提交的 Commit 阶段。 | [代码](https://github.com/tikv/tikv/blob/5581e45f7021117e66793b27978cb75fcdc688d0/src/storage/txn/commands/commit.rs#L15) |
|  | | 概念 | TiKV's 事务系统中的一个 action。用于将单个 key  commit 到 MvccTxn。 | [代码](https://github.com/tikv/tikv/blob/9e2beb0616294119e6aff1032c12a30c4f59b02b/src/storage/txn/actions/commit.rs#L10) |
| compation              |                                                        | 概念    | 将LSM Tree中的小SST文件合并成一个大的SST文件。                    | [文档](https://docs.pingcap.com/zh/tidb/stable/tidb-lightning-glossary#compaction) |
| ConcurrencyManager | cm | 概念 | TiKV 中用于并发控制和内存锁管理的结构。 | [代码](https://github.com/tikv/tikv/blob/ca88a46acdcdb1aedbab7ac94fb405e83bf04f2f/components/concurrency_manager/src/lib.rs#L3) |
| Context |  | 概念 | TiKV 请求上附加的一些不属于请求本身的必要信息，包括 region 信息，隔离级别等。 | [Protobuf](https://github.com/pingcap/kvproto/blob/f3dafca4c7fd5af12fd83b9cf8540b1a32f61c02/proto/kvrpcpb.proto#L738) |
| Collation | Collate | 概念 | 一组字符串序的定义。 | [维基百科](https://zh.m.wikipedia.org/wiki/Collation)， [代码](https://github.com/pingcap/tidb/blob/28c9e9290b16758cb90e864d60db7cdf95eec168/util/collate/collate.go#L60) |
| Datum |  | 概念 | A data box holds different kind of data，有点像 Rust 中的 enum。 | [代码](https://github.com/pingcap/tidb/blob/7c817195688833291fcabf01b0ab372170f19347/types/datum.go#L59) |
| Daily Run | | 工作内容 | 每天跑Test case。 |  |
| Detector | | 概念 | 死锁检测器。 | [代码](https://github.com/tikv/tikv/blob/3338f2982b6d3387727a53c5e94d59819a43d76a/src/server/lock_manager/deadlock.rs#L468) |
| DistinctScore          |                                                        | 概念    | The score that the other is distinct from the stores.        | [代码](https://github.com/tikv/pd/blob/0ea47138bf5c55f9b4ebd922e14a65478e96454e/server/core/store.go#L442) |
| distinctScoreFilter    | distinct-filter                                        | 概念    | distinctScoreFilter保证distinct score不会下降                | [代码](https://github.com/tikv/pd/blob/e7c9c18e94ed5092ac4d8cc782323ca0a91c28e5/server/schedule/filter/filters.go#L162) |
| location-labels        |                                                        | 配置项  | 表示TiKV集群拓扑结构的label。 | [文档](https://docs.pingcap.com/zh/tidb/stable/pd-configuration-file#location-labels), [配置文件示例](https://github.com/tikv/pd/blob/6a418cee3dc8358e10872ee19fc5470d522d102f/conf/config.toml#L148) |
| LockManager | | 概念 | TiKV中用于管理悲观锁的组件。 | [代码](https://github.com/tikv/tikv/blob/2a2fa03da53b63f3fc24d7ea53aead40176979b5/src/storage/lock_manager.rs#L48) |
| max-pending-peer-count | max-pending-peer                                       | 配置项  | 一个store上的最大 pending-peer 数。                          | [文档](https://docs.pingcap.com/zh/tidb/stable/pd-configuration-file#max-pending-peer-count) |
| MemBuffer |  | 概念 | 内存中的KV存储，用来在提交到TiKV前buffer住修改。 | [代码](https://github.com/pingcap/tidb/blob/eae64e40fee5976dc8d22ab5ad27b3f0cdba8a67/kv/kv.go#L187) |
| Peer                   |                                                        | 概念    | 同一个 Raft Group 中, replica 之间互称 peer。                | [文档](https://docs.pingcap.com/zh/tidb/stable/glossary#regionpeerraft-group) |
| pending-peer           |                                                        | 概念    | 一个和Leader的raft log差很多的Follower 或 Learner称为一个pending-peer。 | [文档](https://docs.pingcap.com/zh/tidb/stable/glossary#pendingdown) |
| Prewrite               |                                                        | 概念    | 2阶段提交中的第一个阶段。                                     |                                                              |
|                        |                                                        | 概念    | TiKV's 事务系统中的一个 Command。用于在乐观事务中进行2阶段提交的Prewrite阶段。 | [代码](https://github.com/tikv/tikv/blob/3d45a79c242aacd3f44af9a766474dd3db5ac1e7/src/storage/txn/commands/prewrite.rs#L29) |
| PrewritePessimistic    | PessimisticPrewrite                                    | 概念    | TiKV's 事务系统中的一个 Command。用于在悲观事务中进行2阶段提交的Prewrite阶段。 | [代码](https://github.com/tikv/tikv/blob/3d45a79c242aacd3f44af9a766474dd3db5ac1e7/src/storage/txn/commands/prewrite.rs#L200) |
| Region                 | Tablet (Spanner, YugabyteDB), Range (CRDB), Raft group | 概念    | 保存的所有数据中的一部分，这一部分数据作为一个raft group储存在一起。 | [文档](https://docs.pingcap.com/zh/tidb/stable/glossary/#regionpeerraft-group), [Protobuf](https://github.com/pingcap/kvproto/blob/4c02fbeda1da100020c34d5a0eccbfa3cfd17532/proto/metapb.proto#L62) |
| RegionEpoch            |                                                        | 概念    |                                                              | [Protobuf](https://github.com/pingcap/kvproto/blob/4c02fbeda1da100020c34d5a0eccbfa3cfd17532/proto/metapb.proto#L55) |
| region-schedule-limit  |                                                        | 配置项  | 同时进行 Region 调度的最大任务个数                           | [文档](https://docs.pingcap.com/zh/tidb/stable/pd-configuration-file#region-schedule-limit) |
| RegionInfo             |                                                        | 概念    |                                                              | [代码](https://github.com/tikv/pd/blob/dcce131f52dafd9625ff8ae669b40e22f1d15953/server/core/region.go#L37) |
| ScanLock | | 概念 | 扫出一个 region 上的所有锁。 | [Protobuf](https://github.com/pingcap/kvproto/blob/3c1ff6599f5efb9daa24abe2baffca9b515285bf/proto/tikvpb.proto#L35), [代码](https://github.com/tikv/tikv/blob/2a2fa03da53b63f3fc24d7ea53aead40176979b5/src/storage/txn/commands/scan_lock.rs#L10) |
| start_ts | version, start_version, transaction_id | 概念 | TiKV中一个事务的开始时间戳，同时也可用于唯一标记一个事务。 | [Protobuf](https://github.com/pingcap/kvproto/blob/cdcb788eaebd513df2e5e98a7b8b4fe6132713cc/proto/kvrpcpb.proto#L80) |
| Store                  | TiKV/TiFlash node                                      | 概念    | 一个 tikv-server/tiflash 实例                            | [文档](https://docs.pingcap.com/zh/tidb/stable/glossary#store) |
| store-balance-rate     |                                                        | 配置项  | 控制 TiKV 每分钟最多允许做 add peer 相关操作的次数。         | [文档](https://docs.pingcap.com/zh/tidb/stable/pd-configuration-file#store-balance-rate) |
| Store Limit            |                                                        | 特性 | 对每个store单独设置各种限制。 | [文档](https://docs.pingcap.com/zh/tidb/stable/configure-store-limit) |
| TransferLeader         |                                                        | 概念    | 一个转移leader到某个特定peer上的操作。 | [文档](https://docs.pingcap.com/zh/tidb/stable/glossary#operator-step) |
| TxnState | | 概念 | `kv.Transaction` 的简单wrapper，用于支持lazy的事务 和缓存修改。 | [代码](https://github.com/pingcap/tidb/blob/43cccbb72fff3bbc4e086811cb7e2fc04786b444/session/txn.go#L39) |
| Waiter | | 概念 | 代表一个等锁的请求。 | [代码](https://github.com/tikv/tikv/blob/cea0f296a83a1c1510adedaa8d52dceca49492f6/src/server/lock_manager/waiter_manager.rs#L178) |
| WaiterManager | | 概念 | 用于管理悲观锁的等待和唤醒过程。 | [代码](https://github.com/tikv/tikv/blob/cea0f296a83a1c1510adedaa8d52dceca49492f6/src/server/lock_manager/waiter_manager.rs#L448) |
| WaitTable | | 概念 | WaiterManager的一部分，用于存储Waiter。 | [代码](https://github.com/tikv/tikv/blob/cea0f296a83a1c1510adedaa8d52dceca49492f6/src/server/lock_manager/waiter_manager.rs#L282) |
| Worker | | 概念 | TiKV中的一种在yatp线程池中并行运行任务的机制。 | [代码](https://github.com/tikv/tikv/blob/1a98d6c63735e26b9452551081de6711d18cd40f/components/tikv_util/src/worker/mod.rs#L5) |

