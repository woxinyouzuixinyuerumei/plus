<?php

/*
 * +----------------------------------------------------------------------+
 * |                          ThinkSNS Plus                               |
 * +----------------------------------------------------------------------+
 * | Copyright (c) 2017 Chengdu ZhiYiChuangXiang Technology Co., Ltd.     |
 * +----------------------------------------------------------------------+
 * | This source file is subject to version 2.0 of the Apache license,    |
 * | that is bundled with this package in the file LICENSE, and is        |
 * | available through the world-wide-web at the following url:           |
 * | http://www.apache.org/licenses/LICENSE-2.0.html                      |
 * +----------------------------------------------------------------------+
 * | Author: Slim Kit Group <master@zhiyicx.com>                          |
 * | Homepage: www.thinksns.com                                           |
 * +----------------------------------------------------------------------+
 */

namespace Zhiyi\Plus\Http\Controllers\APIs\V2;

use Illuminate\Http\Request;
use Zhiyi\Plus\Models\User as UserModel;
use Zhiyi\Plus\Models\BlackList as UserBlacklistModel;

class UserBlacklistController extends Controller
{
    /**
     * 加入黑名单.
     * @Author   Wayne
     * @DateTime 2018-04-17
     * @Email    qiaobin@zhiyicx.com
     * @param    Request             $request [description]
     * @param    UserModel           $user    [description]
     * @return   [type]                       [description]
     */
    public function black(Request $request, UserModel $targetUser, UserBlacklistModel $blackList)
    {
        $target_id = $targetUser->id;
        $user_id = $request->user()->id;
        $record = $blackList->where(['user_id' => $user_id, 'target_id' => $target_id])
            ->first();
        if (! $record) {
            $record = new UserBlacklistModel();
            $record->user_id = $user_id;
            $record->target_id = $target_id;
        }

        $record->save();

        return response()->json(['message' => '操作成功'], 201);
    }

    /**
     * 移出黑名单.
     * @Author   Wayne
     * @DateTime 2018-04-17
     * @Email    qiaobin@zhiyicx.com
     * @param    Request             $request [description]
     * @param    UserModel           $user    [description]
     * @return   [type]                       [description]
     */
    public function unBlack(Request $request, UserModel $targetUser, UserBlacklistModel $blackList)
    {
        $target_id = $targetUser->id;
        $user_id = $request->user()->id;
        $blackList->where(['user_id' => $user_id, 'target_id' => $target_id])
            ->delete();

        return response()->json('', 204);
    }

    /**
     * black list of current user.
     * @Author   Wayne
     * @DateTime 2018-04-18
     * @Email    qiaobin@zhiyicx.com
     * @param    Request             $request [description]
     * @return   [type]                       [description]
     */
    public function blackList(Request $request)
    {
        $user = $request->user();
        $offset = $request->input('offset', 0);
        $limit = $request->input('limit', 15);
        $blacks = $user->blacklists()
            ->with('user')
            ->limit($limit)
            ->offset($offset)
            ->get();

        $blacks = $blacks->map(function ($black) {
            return $black->user;
        });

        return response()->json($blacks, 200);
    }
}