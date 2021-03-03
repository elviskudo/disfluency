<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller
{
	public function __construct ()
	{
		parent::__construct();
		$this->load->model('user_model');
		$this->load->model('analythic_model');
	}

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		$this->template('main');
	}

	private function template ($view_file, $data = null)
	{
		$this->load->view('partials/header');
		$this->load->view($view_file, $data);
		$this->load->view('partials/footer');
	}

	public function explain ()
	{
		$data = [
			'name' => $_POST['name'],
			'email' => $_POST['email']
		];

		$data['model'] = $this->user_model->save($data);

		$this->session->set_userdata([
			'user_id' => $data['model']->id,
			'name' => $data['model']->name,
			'email' => $data['model']->email
		]);

		if (strtolower($data['model']->name) == 'awa' && strtolower($data['model']->email) == 'awa.fauzia@gmail.com') {
			$data['analythic'] = $this->analythic_model->list();

			$this->template('admin', $data);
		} else {
			$this->template('explain', $data);
		}
	}

	public function cards ()
	{
		$this->template('cards');
	}

	public function link ()
	{
		$this->template('link');
	}
}
