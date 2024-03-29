<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Comment extends Model
{
    /**
     * 删除评论
     * @param $id
     * @return mixed
     */
    public static function deleteComment($id) {
        $result = DB::table('comments')
            ->where('id', $id)
            ->update([
                'status' => '1',
                'updated_at' => getFormatDate()
            ]);

        if (!empty($result)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 获取评论列表
     * @param [type] $pageSize
     * @param [type] $keyword
     * @return void
     */
    public static function getCommentLists($pageSize, $keyword) {
        $query = DB::table('comments')->where('status', '0');

        if ($keyword) {
            $query->where(function ($q) use ($keyword) {
                $q->orWhere('guideline_title', 'like', $keyword . '%')
                    ->orWhere('author', 'like', $keyword . '%');
            });
        }
        $result = $query->orderBy('created_at', 'desc')->paginate($pageSize);

        if (!empty($result)) {
            return responseToPage($result);
        } else {
            return false;
        }
    }

    /**
     * 提交攻略评论
     * @param $user
     * @return bool
     */
    public static function postGuidelineComment($comment) {
        // 添加
        $result = DB::table('comments')->insertGetId($comment);

        if (!empty($result)) {
            return true;
        } else {
            return false;
        }
    }
}
