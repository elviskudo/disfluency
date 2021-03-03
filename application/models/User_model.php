<?php defined('BASEPATH') OR exit('No direct script access allowed');

class User_model extends CI_Model
{
    private $_table = 'users';

    public function __construct()
    {
        parent::__construct();
    }

    public function save ($data)
    {
        $this->db->where('email', $data['email']);
        $user = $this->db->get($this->_table)->row();

        if (!$user) {
            $this->name = $data['name'];
            $this->email = $data['email'];
            $this->created_at = date('Y-m-d H:i:s');
            $this->updated_at = date('Y-m-d H:i:s');

            $this->db->insert($this->_table, $this);

            $this->db->where('email', $this->email);
            return $this->db->get($this->_table)->row();
        } else {
            return $user;
        }
    }

    public function getByEmail ($email)
    {
        $this->db->where('email', $email);

        return $this->db->get($this->_table)->row();
    }
}